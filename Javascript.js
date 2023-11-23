var form = document.getElementById("formId");
      function submitForm(event) {
         event.preventDefault();
         var FullName = document.getElementById("F").value;
         console.log(FullName);
      }
      form.addEventListener('submit', submitForm);