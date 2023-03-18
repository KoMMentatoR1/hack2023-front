import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import {
  AuthButtonContainer,
  AuthButton,
} from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInput } from '../../components/base/base-input'
import { useAction } from '../../shared/hooks/useAction'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'

const SwitchPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>()

  const navigator = useNavigate()
  const { switchForgotPass } = useAction()

  const { code } = useParams()
  const { snack } = useTypeSelector(state => state.snackbar)

  const onSubmit: SubmitHandler<FieldValues> = data =>
    switchForgotPass(code!, data.password)

  useEffect(() => {
    if (snack && snack.message === 'Пароль успешно изменен') {
      navigator(`/login}`)
    }
  }, [snack])

  return (
    <AuthPageLayout title='Изменение пароля' simpleAuth={false}>
      <FormContainer>
        <BaseInput
          required
          label='Пароль'
          error={errors.password ? true : false}
          name='password'
          control={control}
          password
          helperText={errors.password?.message as string}
          rules={{
            required: 'Поле не может быть пустым',
            minLength: { value: 8, message: 'Пароль слишком мал' },
            maxLength: { value: 255, message: 'Пароль слишком большой' },
          }}
        />
        <BaseInput
          required
          label='Повторения пароля'
          error={errors.repeatPassword ? true : false}
          name='repeatPassword'
          control={control}
          password
          helperText={errors.repeatPassword?.message as string}
          rules={{
            required: 'Повторное введение пароля обязательно',
            minLength: { value: 8, message: 'Пароль слишком мал' },
            maxLength: { value: 255, message: 'Пароль слишком большой' },
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Пароли не совпадают'
              }
            },
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: '50px' }}>
          <AuthButton
            onClick={() => navigator('/login')}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            Вернуться к ходу
          </AuthButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            Сменить пароль
          </AuthButton>
        </Box>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default SwitchPass
