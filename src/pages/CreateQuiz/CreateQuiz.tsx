import { useForm, FieldValues } from 'react-hook-form'
import { regionApi } from '../../app/store/api/regionApi'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInput } from '../../components/base/base-input'
import { BaseSelect } from '../../components/base/base-select'
import { IOption } from '../../components/base/base-select/ui/BaseSelect'
import { Header } from '../../components/Header'

export const CreateQuiz = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit = () => {}

  const { data: options } = regionApi.useGetAllRegionsQuery()

  return (
    <>
      <Header />
      <AuthPageLayout
        title='Создание викторины'
        simpleAuth={false}
        authMode='login'
      >
        <FormContainer>
          <BaseInput
            rules={{
              required: 'Название викторины не может быть пустым',
            }}
            required
            error={errors.title ? true : false}
            label='Название'
            name='title'
            helperText={errors.title?.message as string}
            control={control}
          />
          <BaseInput
            rules={{
              required: 'Описание викторины не может быть пустым',
            }}
            required
            error={errors.discription ? true : false}
            label='Описание'
            name='discription'
            helperText={errors.discription?.message as string}
            control={control}
          />
          <BaseSelect
            rules={{
              required: 'Регион не может быть пустым',
            }}
            required
            error={errors.title ? true : false}
            label='Регион'
            name='regionId'
            options={
              options?.map(option => ({
                label: option.title,
                value: option.title,
              })) || ([] as IOption[])
            }
            helperText={errors.title?.message as string}
            control={control}
          />
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
            size='large'
            sx={{ mb: '50px' }}
          >
            Создать квиз
          </AuthButton>
        </FormContainer>
      </AuthPageLayout>
    </>
  )
}
