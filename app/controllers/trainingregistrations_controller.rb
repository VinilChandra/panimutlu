class TrainingregistrationsController < ApplicationController
 def show
          # binding.pry
        @trainings=Trainingregistration.new
    end

    def create
         binding.pry

        @training = Trainingregistration.new(user_params)

        if @training.save

            # # @job.userjobs <<

              trainingid =  params[:trainingregistration][:hiddenid].to_i
                binding.pry
            Usertraining.create(user_id: current_user.id, trainingregistration_id: trainingid)

           flash[:notice] = "You have successfully applied for the job"
            redirect_to trainings_path

        else
            flash[:notice] = "Sorry!! You have not registered "
             render 'show'
      end
    end

end
private
    def user_params
      params.require(:trainingregistration).permit(:name, :age,:housenumber,:hiddenid,:attachment,:street,:village,:district,:state,:phone,:email,:experience,:qualification,:school1,:school2,:school3,:school4,:passout1,:passout2,:passout3,:passout4,:standard1,:standard2,:standard3,:standard4,:job1,:job2,:job3,:exp1,:exp2,:exp3,:desc,:languages,:choicelocation,:previoussalary,:expectedsalary,:religion,:caste)
          end
