let url=document.getElementById("url");
    let qrGenerationForm=document.getElementById("generatebtn");

    let qrCode;
    function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        
    });
    }
    $('#generatebtn').attr('disabled','disabled');
    function invalid(){
      if (url.value.length === 2) {
            $('#generatebtn').removeAttr('disabled');
        }
      else{
            document.getElementById('qr-code').style.display="none";
            $('#generatebtn').attr('disabled','disabled');
    }};
console.log(qrGenerationForm)
    
    // Event listener for form submit event
function ec() {
        document.getElementById('qr-code').style.display="block";
     
     let qrContentInput=`${url.value}`;
    

    let qrContent = qrContentInput;
    console.log(qrContent)
    if (qrCode == null) {
//      let a=document.getElementById('qr-code').innerHTML=`<a href='in.jpeg' downlaod>link here</a>`;
// console.log(a);

        // Generate code initially
        qrCode = generateQrCode(qrContent);
    } else {
        
        // If code already generated then make
        // again using same object
        
        qrCode.makeCode(qrContent);
    }
    };
    