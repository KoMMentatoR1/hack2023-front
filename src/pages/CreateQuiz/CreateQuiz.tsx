import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
import { useAction } from '../../shared/hooks/useAction'

export const CreateQuiz = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const navigator = useNavigate()

  const onSubmit: SubmitHandler<FieldValues> = data => {
    createQuiz({
      description: data.description,
      regionId: data.regionId,
      title: data.title,
    })
    navigator('/createQuestion')
  }

  // const { data: options } = regionApi.useGetAllRegionsQuery()
  const options = [
    { id: 1, title: 'Россия' },
    { id: 2, title: 'Америка' },
    { id: 3, title: 'Европа' },
    { id: 4, title: 'Азия' },
  ]

  const { createQuiz } = useAction()

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
            error={errors.description ? true : false}
            label='Описание'
            name='description'
            helperText={errors.description?.message as string}
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
                value: option.id,
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
            Создать викторину
          </AuthButton>
        </FormContainer>
      </AuthPageLayout>
    </>
  )
}
