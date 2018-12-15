<template>
    <div class="card border-grey border-lighten-3 m-0">
        <div class="card-header border-0">
            <slot name="card-header">
            </slot>
        </div>

        <div class="card-content">
            <div class="card-body">
                <slot name="card-body">
                </slot>
            </div>
        </div>

        <div class="card-footer">
            <slot name="card-footer">
            </slot>
        </div>
    </div>
</template>
