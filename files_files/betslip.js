var count = 0;
function refreshSlip() {
    $.post("betslip", {}, function(t) {
        $("#betslip").animate({
            opacity: "0.8"
        }),
        $("#betslip").html(t),
        $("#betslip").animate({
            opacity: "1"
        })
    }).done(function() {
        $(".loader").css("display", "none")
    })
}
function fbPurchase() {
    fbq("trackCustom", "PlaceBetLite", {
        bet_type: "pre_match",
        num_items: "",
        user_id: "",
        value: "",
        currency: "USD",
        message: ""
    })
}
function fbDeposit() {
    fbq("trackCustom", "DepositLite", {
        content_type: "product",
        content_ids: "",
        value: "",
        currency: "USD"
    })
}
function fbPredict() {
    fbq("trackCustom", "PredictLite", {
        content_type: "product",
        content_ids: "",
        value: "",
        currency: "USD"
    })
}
function fbRegister() {
    fbq("trackCustom", "RegisterLite", {
        content_type: "product",
        content_ids: "",
        value: "",
        currency: "USD"
    })
}
function fbVerify() {
    fbq("trackCustom", "VerifyLite", {
        content_type: "product",
        content_ids: "",
        value: "",
        currency: "USD"
    })
}
function refreshBingwaFour() {
    $.post("betslip/bingwa", {}, function(t) {
        $("#betslipB").animate({
            opacity: "0.8"
        }),
        $("#betslipB").html(t),
        $("#betslipB").animate({
            opacity: "1"
        })
    }).done(function() {
        $(".loader").css("display", "none")
    })
}
function addBet(t, e, i, c, n, o, a, r, s, p, l, d) {
    $(".loader").slideDown("slow");
    var u = "https://www.betika.com/lite/betslip/add";
    var i = t;
    count += 1;
    $("." + i).removeClass("picked"),
    $("." + c).addClass("picked"),
    $(".slip-counter").html(count);
    // $.post(u, {
    //     match_id: t,
    //     sub_type_id: e,
    //     odd_key: i,
    //     custom: c,
    //     special_bet_value: n,
    //     bet_type: o,
    //     home: a,
    //     away: r,
    //     odd: s,
    //     oddtype: p,
    //     parentmatchid: l,
    //     pos: d
    // }, function(e) {
    //     var i = t;
    //     $("." + i).removeClass("picked"),
    //     "1" == e.status && $("." + c).addClass("picked"),
    //     e.predict_amount > 0 ? ($(".predict-amount").html(e.predict_amount),
    //     $(".the-prediction").addClass("predict-active")) : $(".predict-amount").removeClass("predict-active"),
    //     0 == e.predict_amount ? ($(".predict-amount").html(e.predict_amount),
    //     $(".predict .place").html("Predict atleast 1 match"),
    //     $(".predict .place").removeAttr("href"),
    //     $(".predict .place").removeAttr("onClick")) : ($(".predict .place").html("Place bet"),
    //     $(".predict .place").attr("href", "betslip"),
    //     $(".predict .place").attr("onClick", "fbPredict()")),
    //     "jackpot" == o || "bingwafour" == o || $(".slip-counter").html(e.total)
    // })
}
function removeMatch(t) {
    $(".loader").slideDown("slow"),
    $.post("betslip/remove", {
        match_id: t
    }, function(e) {
        refreshSlip(),
        $("." + t).removeClass("picked")
    })
}
function clearSlip(t) {
    $(".loader").slideDown("slow"),
    $.post("betslip/clearslip", {}, function(t) {
        refreshSlip(),
        $(".picked").removeClass("picked")
    })
}
function fbJackpot() {
    fbq("track", "InitiateCheckout", {
        content_type: "product",
        content_ids: [user_id],
        value: 50,
        currency: "USD"
    })
}
function winnings() {
    var t = $("#bet_amount").val()
      , e = $("#total_odd").val()
      , i = t * e
      , i = Math.round(i);
    $("#pos_win").html(i)
}
function winningsM() {
    var t = $("#bet_amount_m").val()
      , e = $("#total_odd_m").val()
      , i = t * e
      , i = Math.round(i);
    $("#pos_win_m").html(i)
}
