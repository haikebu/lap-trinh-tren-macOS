function tinhtoan() 
{
    let ten = document.getElementById("ten").value;
    let birthday = document.getElementById("birthday").value;
    let y1 = Number(document.getElementById("birthday").value[0]);
    let y2 = Number(document.getElementById("birthday").value[1]);
    let y3 = Number(document.getElementById("birthday").value[2]);
    let y4 = Number(document.getElementById("birthday").value[3]);
    let m1 = Number(document.getElementById("birthday").value[5]);
    let m2 = Number(document.getElementById("birthday").value[6]);
    let d1 = Number(document.getElementById("birthday").value[8]);
    let d2 = Number(document.getElementById("birthday").value[9]);
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
let soso2 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 2)
        soso2++;
}
if (soso2==1) 
{
    document.getElementById("conso2").innerHTML = ('2')
}
if (soso2==2) 
{
    document.getElementById("conso2").innerHTML = ('22')
}
if (soso2==3) 
{
    document.getElementById("conso2").innerHTML = ('222')
}
if (soso2==4) 
{
    document.getElementById("conso2").innerHTML = ('2222')
}
if (soso2==5) 
{
    document.getElementById("conso2").innerHTML = ('22222')
}
if (soso1==6) 
{
    document.getElementById("conso2").innerHTML = ('222222')
}
if (soso1==7) 
{
    document.getElementById("conso2").innerHTML = ('2222222')
}
    //console.log(soso1);

    }