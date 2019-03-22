import Vue from 'vue'; // 'vue' is an alias
import "../../Global/Styles/globalStyles"; // not a .js file, so you must resolve this to .css in webpacks resolve extensions

new Vue({
    el: "#index-page",
    data: {
        hello: "Hello World Bitches"
    }
});

//if you dont add the below, the module will not be accepted for hot reload
if (module["hot"]) {
    module["hot"].accept();
}