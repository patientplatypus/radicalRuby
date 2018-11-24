class RezController < ApplicationController
    def new
        render :nothing => true #want an api hook with no render for resources here ~patientplatypus
    end
    def index
        @rez = Rez.all
        # respond_to do |format|
        #     format.html # show.html.erb
        #     format.json { render json: @rez }
        # end
        render json: @rez
    end
    def create
        print('inside the create func in rez controller')
        @rez = Rez.new(rez_params)
        @rez.save
        head 200, content_type: "text/html" #dont render anything ~patientplatypus
    end
    private
    def rez_params
        params.require(:rez).permit(:title, :text)
    end
end
