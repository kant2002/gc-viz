cmake_minimum_required(VERSION 3.0)
project(dkp 
    LANGUAGES CXX
)

#add_compile_definitions(NO_GC)
#add_compile_definitions(REF_COUNT_GC)
#add_compile_definitions(MARK_SWEEP_GC)
#add_compile_definitions(MARK_COMPACT_GC)
add_compile_definitions(COPY_GC)

add_executable(dkp
    dkp.cc
)
