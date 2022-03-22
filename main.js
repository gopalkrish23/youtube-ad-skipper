try{

    window.onload = () => {

        let observer = new MutationObserver(function (mutations, observer){
            mutations.forEach(mutation => {
                if(mutation.target.innerText && mutation.target.innerText.indexOf("Skip Ad") > -1 && document.querySelector(".html5-video-player.ad-showing")){
                    mutation.target.click();
                    console.log('ad skipped');
                }
            });
        });
    
        observer.observe(document.body,  { attributes: true, childList: true, subtree: true });
    }
}
catch(err){
    alert(err);
}