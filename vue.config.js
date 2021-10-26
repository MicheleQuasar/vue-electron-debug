const path = require('path');
const contentBase = path.resolve(__dirname,'src','wasm');

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    devServer : {
        before(app) {
            // use proper mime-type for wasm files
            app.get('*.wasm', function (req, res, next) {
                var options = {
                    root: contentBase,
                    dotfiles: 'deny',
                    headers: {
                        'Content-Type': 'application/wasm'
                    }
                };
                req.url = path.basename(req.url)
                res.sendFile(req.url, options, function (err) {
                    if (err) { next(err); }
                });
            });
        }
    }
  }
}
