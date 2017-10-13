import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];
    headers:Array<any> = [
        {text: 'Date',align: 'left', sortable:false,value: 'date'},
        { text: 'Temp. (C)',  sortable:false, value: 'tempc' },
        { text: 'Temp. (F)',  sortable:false, value: 'tempf' },
        { text: 'Summary',  sortable:false, align: 'left', value: 'summary' }
      ]
    mounted() {
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
