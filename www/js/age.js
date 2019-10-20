window.setInterval(a, 1000);

function a() {
    return b(Date, Math, 2**2*7*71, 3*3, 2**2*2);
}

function b(a, b, x, y, z) {
    var _a = new a(),
        _b = new a(x, y, z),
        _c = _a - _b;
    document.getElementById("age-data").innerHTML = "" + b.round(_c / 1000) + " seconds";
}