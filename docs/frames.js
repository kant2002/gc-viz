var frame_content = no_gc_frame_content;

function changeGCType() {
  const gc_type = document.getElementById('gc_type').value;
  if (gc_type == "No GC") {
    frame_content = no_gc_frame_content;
  } else if (gc_type == "Ref count") {
    frame_content = ref_count_frame_content;
  } else if (gc_type == "Mark-Sweep GC"){
    frame_content = mark_sweep_frame_content;
  } else if (gc_type == "Mark-Compact GC"){
    frame_content = mark_compact_frame_content;
  } else if (gc_type == "Copy GC"){
    frame_content = copy_frame_content;
  } else {
    frame_content = no_gc_frame_content;
  }

  frame_count = frame_content.length;
}