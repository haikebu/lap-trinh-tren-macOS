function tinhtoan() 
{
    let ten = document.getElementById("ten").value;
    let birthday = document.getElementById("birthday").value;
    let y1 = document.getElementById("birthday").value[0];
    y1 = Number(y1);
    let y2 = document.getElementById("birthday").value[1];
    y2 = Number(y2);
    let y3 = document.getElementById("birthday").value[2];
    y3 = Number(y3);
    let y4 = document.getElementById("birthday").value[3];
    y4 = Number(y4);
    let m1 = document.getElementById("birthday").value[5];
    m1 = Number(m1);
    let m2 = document.getElementById("birthday").value[6];
    m2 = Number(m2);
    let d1 = document.getElementById("birthday").value[8];
    d1 = Number(d1);
    let d2 = document.getElementById("birthday").value[9];
    d2 = Number(d2);
    let tong = y1 + y2 + y3 + y4 + m1 + m2 + d1 + d2; 
    if ((tong<=11) || (tong==22))  
    {
        let cscd = tong;
        document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
    }
    else 
    {
        let t1 = tong%10;
        let t2 = (tong - (tong%10))/10;
        let cscd = t1 + t2;
        if (cscd>11)
        {
            let t1 = cscd%10;
            let t2 = (cscd - (cscd%10))/10;
            cscd = t1 + t2;
            document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
        }
        document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
    };
    let consotrongngaysinh =[y1,y2,y3,y4,m1,m2,d1,d2];
    let soso1 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 1)
        soso1++;
}
if (soso1==1) 
{
    document.getElementById("conso1").innerHTML = ('1 ')
}
if (soso1==2) 
{
    document.getElementById("conso1").innerHTML = ('11')
}
if (soso1==3) 
{
    document.getElementById("conso1").innerHTML = ('111')
}
if (soso1==4) 
{
    document.getElementById("conso1").innerHTML = ('1111')
}
if (soso1==5) 
{
    document.getElementById("conso1").innerHTML = ('11111')
}
if (soso1==6) 
{
    document.getElementById("conso1").innerHTML = ('111111')
}
if (soso1==7) 
{
    document.getElementById("conso1").innerHTML = ('1111111')
}
if (soso1==8) 
{
    document.getElementById("conso1").innerHTML = ('11111111')
}

    //console.log(soso1);

    }