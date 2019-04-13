data segment
  e dq 2.71828
  pi dd 3.14
  negPi dq -3.14
  var1 dd 3240d
  var2 dq 6472d
data ends

code segment
  varSeg dd 22.8
  fld dword ptr cs:[edx+esi*4+6]  
  fld dword ptr es:[eax+edi*4+6]
  fld dword ptr [ebx+esi*4+6]
  fld dword ptr [ecx+esi*4+6]
  fld dword ptr [edx+esi*4+6]
  fmul st(1),st(0)
  fpatan
  fst st(1)
code ends 
End
