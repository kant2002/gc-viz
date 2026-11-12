cmake_minimum_required(VERSION 3.10)
project(dkp 
    LANGUAGES CXX
)
SET(CACHE{GC_TYPE} TYPE STRING HELP "Type of GC to build" VALUE "")

if (GC_TYPE STREQUAL "NO_GC")
    add_compile_definitions(NO_GC)
elseif (GC_TYPE STREQUAL "REF_COUNT_GC")
    add_compile_definitions(REF_COUNT_GC)
elseif (GC_TYPE STREQUAL "MARK_SWEEP_GC")
    add_compile_definitions(MARK_SWEEP_GC)
elseif (GC_TYPE STREQUAL "MARK_COMPACT_GC")
    add_compile_definitions(MARK_COMPACT_GC)
elseif (GC_TYPE STREQUAL "COPY_GC")
    add_compile_definitions(COPY_GC)
else()
    message(FATAL_ERROR "Invalid GC_TYPE ${GC_TYPE}. Valid options is NO_GC, REF_COUNT_GC, MARK_SWEEP_GC, MARK_COMPACT_GC")
endif()

add_executable("dkp_${GC_TYPE}"
    dkp.cc
)
