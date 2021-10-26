#include "emscripten.h"
#include <string>

using std::string;

extern "C" {
    const char* hello();
}

EMSCRIPTEN_KEEPALIVE
const char* hello(){
    for (int i=0; i<4; i++){
        int j = i;
        printf("Doing something in a loop!");
        i=j;
    }
    return "Hello World!";
}
