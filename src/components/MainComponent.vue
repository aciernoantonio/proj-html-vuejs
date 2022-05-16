<template>
    <main>
        <section class="strong_points">

            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col human_capital">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-user-group" /></div>
                                <h5 class="card-title">Human Capital</h5>
                                <h6 class="card-subtitle my-2 text-muted">Humanizing business Harness the power of technology to improve the way people work</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.human_capital -->

                     <div class="col core_business">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-chart-pie" /></div>
                                <h5 class="card-title">Core Business</h5>
                                <h6 class="card-subtitle my-2 text-muted">It takes innovative approaches to trasnform, modernize, and run existing playforms.</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.core_business -->

                     <div class="col performance">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-gauge-high" /></div>
                                <h5 class="card-title">Human Capital</h5>
                                <h6 class="card-subtitle my-2 text-muted">Achieving maximum impact and value from investi,emts in finance and supply chain.</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.performance -->


                </div>
            </div>

        </section>
        <!-- /.strong_points -->
    </main>
</template>

<style lang="scss" scoped>

main{
    .strong_points{
        background-color: #E8F9E5;
        padding: 8rem 0;

        .container{
            width: 800px;
            margin: auto;
        }

        .icon{
            color: #328486;
            background-color: #DAECED;
            border-radius: 50%;
            padding: 0.70rem 0.80rem;
        }

        h5{
            font-weight: 600;
        }

        .performance{
            .icon{
                padding: 0.70rem 0.85rem;
            }
        }
    }
}

</style>