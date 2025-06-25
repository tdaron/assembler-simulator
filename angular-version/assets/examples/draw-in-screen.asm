MOV 925, 1 ; Set SM flag at 1 to enable screen drawing
.start:
    MOV C, 927 ; Move to the start of the screen memory
.loop: 
    MOV [C], 1 ; Set the current screen memory location to 1
    ADD C, 2 ; Move to the next screen memory location
    JMP .loop ; Repeat the loop indefinitely