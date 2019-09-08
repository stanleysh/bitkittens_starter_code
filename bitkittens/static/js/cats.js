document.addEventListener("DOMContentLoaded", function() {
    const summonButton = document.querySelector('.summon-cats');
    const newCats = axios.get('https://eric-deploy-test.herokuapp.com/cats'); //Using different link since bitkitten is down
    summonButton.addEventListener('click', function() {
        console.log('testing hi there');
        let catPicker = Math.floor(Math.random() * 3);
        let boxPicker = Math.floor(Math.random() * 3) + 1;
        newCats.then( (response) => {
            let catBox = document.querySelector(`#cat${boxPicker}`);
            let catPic = response.data['cats'][catPicker]['photo'];
            let newCat = document.createElement('img');
            newCat.src = catPic;
            catBox.appendChild(newCat);
        });
    });


});
