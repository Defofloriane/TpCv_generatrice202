// Get all variables
function changeImage(){
        var bannerImage = document.getElementById('bannerImg');
        if(bannerImage){
            bannerImage.addEventListener("DOMContentLoaded", run, false);
          }
        var result = document.getElementById('res');
        var img = document.getElementById('tableBanner');
        // document.addEventListener("DOMContentLoaded", run, false);
        // 

        bannerImage.addEventListener('change', function () {
            var file = this.files[0];
            if (file.type.indexOf('image') < 0) {
                res.innerHTML = 'invalid type';
                return;
            }
            var fReader = new FileReader();
            fReader.onload = function () {
                img.src = fReader.result;
                localStorage.setItem("imgData", getBase64Image(img));
            };

            fReader.readAsDataURL(file);
        });

        function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var dataURL = canvas.toDataURL("image/png");

            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            
        }

        function fetchimage() {
            var dataImage = localStorage.getItem('imgData');
            img.src = "data:" + dataImage;
        
        }
        // Call fetch to get image from localStorage.
        fetchimage();
 }
