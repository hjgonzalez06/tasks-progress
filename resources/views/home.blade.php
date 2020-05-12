@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-11">
            <div class="card">
                <div class="card-header h1 text-center">Mis tableros</div>

                <div class="card-body">
                    <dashboards />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
