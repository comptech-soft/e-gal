<template>
    <div class="card">
        <div class="card-body">
            <div class="bug-list-search">
                <div class="bug-list-search-content">
                    <form>
                        <div class="position-relative">
                            <input 
                                type="search" 
                                id="search-roles" 
                                class="form-control" 
                                placeholder="Caută în roluri..."
                            />
                            <div class="form-control-position">
                                <i class="la la-search text-size-base text-muted la-rotate-270"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            records: {type: Array, default: () => []}
        }
    }
</script>

