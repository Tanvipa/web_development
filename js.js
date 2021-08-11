let image=document.getElementById('image');
                let images=['image1.jpeg','image2.jpeg','image3.jpeg']
                setInterval(function() {
                let random =Math.floor(Math.random()*3);
                image.src=images[random];
                },800);