<template>
    <li v-if="user" class="dropdown dropdown-user nav-item">
        <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
            <span class="mr-1">Salut,
                <span class="user-name text-bold-700">{{user.first_name}} {{user.last_name}}</span>
            </span>
            <span class="avatar avatar-online">
                <img :src="url + '/app-assets/images/portrait/small/avatar-s-19.png'" alt="avatar">
                <i></i>
            </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
                <i class="ft-user"></i> Edit Profile
            </a>
            <a class="dropdown-item" href="#">
                <i class="ft-mail"></i> My Inbox
            </a>
            <a class="dropdown-item" href="#">
                <i class="ft-check-square"></i> Task
            </a>
            <a class="dropdown-item" href="#">
                <i class="ft-message-square"></i> Chats
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="onLogout">

                <i class="ft-power"></i> Logout
            </a>
        </div>
    </li>
</template>

<script>

   

    export default {
        
        mixins: [
            require('./~mixins')
        ],

        methods: {
            onLogout() {
                alert('Logout....');
            }
        }

    }
</script>