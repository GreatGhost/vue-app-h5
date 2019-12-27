import Vue from 'vue'
import Title from './title.vue'

Title.newInstance = properties => {
    const props = properties || {};

    const Instance = new Vue({
        data: props,
        render (h) {
            return h(Title, {
                props: props
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const title = Instance.$children[0];

    return {
        print(){
            title.print();
        }
    }
};

export default Title;