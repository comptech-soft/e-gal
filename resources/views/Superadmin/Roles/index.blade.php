@extends('adminmodern::layout.index')

@section('content')
    <roles-page
        v-if="page"
        :page_manager="page.page_manager"
    >
    </roles-page>
@stop

@section('scripts')
    <script src="{{ config('app.url') }}/app-assets/js/superadmin/roles/index.js">
    </script>
@stop