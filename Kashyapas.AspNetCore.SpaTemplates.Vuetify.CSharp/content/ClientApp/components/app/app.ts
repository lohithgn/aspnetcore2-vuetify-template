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
            { title: 'Home', icon: 'home', path : '/' },
            { title: 'Counter', icon: 'school',path : '/counter' },
            { title: 'Fetch data', icon: 'view_list',path : '/fetchdata' }
        ]
    }
    onMenuItemClick(){
        console.log(event)
    }
}
