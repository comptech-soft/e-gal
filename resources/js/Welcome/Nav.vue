<template>
    <div class="navbar-wrapper">
        <nav-header></nav-header>
        <div class="navbar-container content">
            <div class="collapse navbar-collapse" id="navbar-mobile">
                <ul class="nav navbar-nav mr-auto float-left">
                    <leftmenu-toggle-item></leftmenu-toggle-item>
                    <maximize-item v-if="false"></maximize-item>
                    <mega-nav-item v-if="user"></mega-nav-item>
                    <search-item></search-item>
                </ul>
                <ul class="nav navbar-nav float-right">
                    <user-item></user-item>
                    <language-item></language-item>
                    <notifications-item v-if="user"></notifications-item> 
                    <messages-item v-if="user"></messages-item>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        
        components: {
            'nav-header': require('./Header'),

            'leftmenu-toggle-item': require('./Toggle'),
            'maximize-item': require('./Maximize'),
            'mega-nav-item': require('./Mega'),
            'search-item': require('./Search'),
            
            'user-item': require('./User'),
            'language-item': require('./Language'),
            'notifications-item': require('./Notifications'),
            'messages-item': require('./Messages'),
        }
    }
</script>
