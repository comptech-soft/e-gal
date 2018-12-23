@extends('adminmodern::layout.index')

@section('content')
    <simple-page
        v-if="(page_manager != null) && (data_manager != null)"
        :page_manager="page_manager"
        :data_manager="data_manager"
        :records="records"
    >
    </simple-page>
@stop

@section('scripts')
    <script src="{{ $script }}">
    </script>
@stop