function loadNavbar() {
            fetch('header.html')
              .then(response => response.text())
              .then(data => {
                document.getElementsByClassName('header').innerHTML = data;
              })
              .catch(error => console.error('Error loading navbar:', error));
          }
          
          window.onload = loadNavbar;