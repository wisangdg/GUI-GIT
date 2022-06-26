class Proses {
    constructor(url) {
        this.res = null;
        this.hit(url);
        this.resFunc = null;
    }

    hit(url) {
        setTimeout(() => {
            this.res = {
                "nama": "arian"
            }
            this.resFunc(this.res)
        }, 1000)
    }

    then(functionResponse) {}
}

function fetch(url) {
    return new Proses()
}

fetch("http://mantap.jiwa").then((res) => {
    document.getElementById("content").innerHTML = res.nama
})