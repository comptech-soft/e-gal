@extends('adminmodern::layout.index')

@section('content')
    <roles-page
            v-if="(page_content != null) && (data_manager != null)"
            :page_manager="page_content.page_manager"
            :data_manager="data_manager"
            :records="records"
        >
    </roles-page>
@stop

@section('scripts')
    <script src="{{ config('app.url') }}/app-assets/js/superadmin/roles/index.js">
    </script>
@stop