<template>
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item mobile-menu d-md-none mr-auto">
                <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                    <i class="ft-menu font-large-1"></i>
                </a>
            </li>
            <li class="nav-item">
                <a v-if="url" class="navbar-brand" :href="url">
                    <img 
                        class="brand-logo" 
                        alt="modern admin logo" 
                        :src="url + '/app-assets/images/logo/logo.png'"
                    />
                    <h3 class="brand-text">
                        {{ app_name }}
                    </h3>
                </a>
            </li>
            <li class="nav-item d-md-none">
                <a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile">
                    <i class="la la-ellipsis-v"></i></a>
                </li>
            </ul>
    </div>
</template>