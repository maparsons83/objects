var coin = {
    state: 0,
    flip: function() {
        return this.state = Math.floor( Math.random() * 2 );
        // randomly set this.state to be either 0 or 1
    },

    toString: function() {
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }
        

        // return “H” or “T” depending on whether this.state is 0 or 1
    },

    toHTML: function() {
        var img = document.createElement("img");

        if (this.state === 0) {
            img.classList.add("heads");

        } else {
            img.classList.add("tails");
        }
        // set the properties of the image element to show either heads or tails
        return img;
    }
};


function tosses() {
    for (let i = 0; i < 20; i++) {
        console.log(coin.flip(), coin.toString());
        const results = document.getElementById("results")
        const header = document.createElement("h1");
        const text = document.createTextNode(coin.toString())
        header.appendChild(text);
        results.appendChild(header) // output to user
        results.appendChild(coin.toHTML());
    }
}

tosses();