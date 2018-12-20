<template>
    <div class="content-detached content-right">
        <div class="content-body" style="margin-left:0px">
            <!-- 
                Sectiunea de filtrare
                Am filtrare daca filter != null 
            -->
            <section v-if="filter!=null" class="row">
                <div class="col-12">
                    <component 
                        :is="filter.component"
                    >
                    </component>
                </div>
            </section>

            <!-- 
                Sectiunea de date
            -->
            <section class="row">
                <div class="col-12">
                    <component 
                        :is="data.component"
                        :header="data.header"
                        :presentation="data.presentation"
                    >
                    </component>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            filter: {required: true},
            data: {required: true},
        },
    }
</script>
