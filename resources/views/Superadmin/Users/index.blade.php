@extends('adminmodern::layout.index')

@section('content')
    <users-page>
    </users-page>
@stop

@section('scripts')
    <script src="{{ config('app.url') }}/app-assets/js/superadmin/users/index.js">
    </script>
@stop