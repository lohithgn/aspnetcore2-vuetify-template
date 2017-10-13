import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})
export default class AppComponent extends Vue {
    drawer:boolean=true;
    items:any[] = [];
    mounted(){
        this.items =  [
            { title: 'Home', icon: 'dashboard' },
            { title: 'About', icon: 'question_answer' }
        ]
    }
    onMenuItemClick(){
        console.log(event)
    }
}
