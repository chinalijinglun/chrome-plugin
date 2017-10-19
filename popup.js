Zepto(function($) {
    var QRCodeBox = new QRCode($(".qr")[0], {
        width : 200,
        height : 200
    });

    //获取当前的url 
    chrome.tabs.getSelected(null, function(tab) {

        if (tab.favIconUrl) {
            $(".favicon").attr("src", tab.favIconUrl).show();
        } 

        // $(".favicon, .qr").bind("error", function(e) {
        //     $(e.target).hide();
        // });

        QRCodeBox.makeCode(tab.url);
    });
});
