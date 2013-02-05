test("Assembler", function() {
  ok(VIPAssembler("MOV R0, #1") == "00C001", "MOV R0, #1");
  ok(VIPAssembler("MOV R1, #1") == "01C001", "MOV R1, #1");
});