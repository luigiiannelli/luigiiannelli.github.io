var modal = document.getElementById("myModal");

        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        function mostraImmagine(imageName, imageCaption) {
          modal.style.display = "block";
          modalImg.src = "immagini/" + imageName;
          captionText.innerHTML = imageCaption;
        }

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
          modal.style.display = "none";
        };