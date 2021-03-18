function datten(){
    let birthday = document.getElementById("birthday").value;
    let y1 = Number(document.getElementById("birthday").value[0]);
    let y2 = Number(document.getElementById("birthday").value[1]);
    let y3 = Number(document.getElementById("birthday").value[2]);
    let y4 = Number(document.getElementById("birthday").value[3]);
    let m1 = Number(document.getElementById("birthday").value[5]);
    let m2 = Number(document.getElementById("birthday").value[6]);
    let d1 = Number(document.getElementById("birthday").value[8]);
    let d2 = Number(document.getElementById("birthday").value[9]);
    let mangngaysinh = [d1,d2,m1,m2,y1,y2,y3,y4]
    let songaysinh = [], solan = [], prev;
    mangngaysinh.sort();
    for ( let i = 0; i < mangngaysinh.length; i++ ) {
        if ( mangngaysinh[i] !== prev ) {
            songaysinh.push(mangngaysinh[i]);
            solan.push(1);
        } 
        else {
                solan[solan.length-1]++;
        }
            prev = mangngaysinh[i];
    }
    for ( let i = 0; i < songaysinh.length; i++ ){
        let socanthem = []
        if ((songaysinh[i] == 1) && (solan[i]>2)){
            
        }
    }
//console.log(solan)
}