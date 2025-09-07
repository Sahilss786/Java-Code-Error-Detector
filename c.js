
    function checkCode() {
      let code = document.getElementById("codeEditor").value;
      let output = document.getElementById("output");
      let errors = [];

      // Simple Java checks
      if (!code.includes("class")) {
        errors.push("❌ Missing 'class' keyword");
      }
      if (code.includes("publc")) {
        errors.push("❌ Did you mean 'public'?");
      }
      if (!code.includes("main(")) {
        errors.push("❌ Missing 'main' method");
      }
      if (!code.trim().endsWith("}\n}")) {
        errors.push("❌ Code should end with '}\n}'");
      }
      
      if(!code.includes(";")){
        errors.push("❌ Missing semicolon ';' in statements");
      }
      if(!code.includes("System.out.println(")){
        errors.push("❌ Missing 'System.out.println(' statement");
      }

      if (errors.length === 0) {
        output.innerText = "✅ No basic syntax errors found!";
        output.style.color = "green";
      } else {
        output.innerText = errors.join("\n");
        output.style.color = "red";
      }
    }
  