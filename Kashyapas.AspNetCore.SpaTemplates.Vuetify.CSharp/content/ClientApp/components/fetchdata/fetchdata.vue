<template>
    <div>
        <h4>Weather forecast</h4>
        <p>This component demonstrates fetching data from the server.</p>
        <v-data-table v-if="forecasts.length" 
                      v-bind:items="forecasts" 
                      v-bind:headers="headers"
                      hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <tr>
                    <td>{{ props.item.dateFormatted }}</td>
                    <td class="text-xs-right">{{ props.item.temperatureC }}</td>
                    <td class="text-xs-right">{{ props.item.temperatureF }}</td>
                    <td>{{ props.item.summary }}</td>
                </tr>
            </template>
        </v-data-table>
        <p v-else>
            <em>Loading...</em>
        </p>
    </div>
</template>

<script src="./fetchdata.ts"></script>