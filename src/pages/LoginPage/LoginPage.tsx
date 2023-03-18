import { Button } from '@mui/material'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'
import {
  ButtonContainer,
  ForgotPassButton,
} from '../../components/Auth/AuthButtonContainer/style/style'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import {
  NavigareButton,
  NavigateBlock,
  NavigateTitle,
} from '../../components/Auth/AuthPageLayout/style/style'
import { BaseInput } from '../../components/base/base-input'
import { Header } from '../../components/Header'
import { useAction } from '../../shared/hooks/useAction'

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const navigator = useNavigate()

  const { login } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    login(data.email, data.password)

  return (
    <>
      <Header />
      <AuthPageLayout authMode='login' title='Авторизация'>
        <FormContainer>
          <BaseInput
            rules={{
              required: 'Email address is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email is not valid',
              },
            }}
            required
            error={errors.email ? true : false}
            label='Почта'
            name='email'
            helperText={errors.email?.message as string}
            control={control}
          />
          <BaseInput
            required
            error={errors.password ? true : false}
            label='Пароль'
            name='password'
            password
            helperText={errors.password?.message as string}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: { value: 6, message: 'Password very small' },
            }}
          />
          <ForgotPassButton
            variant='text'
            onClick={() => navigator('/forgotPass')}
          >
            Забыли пароль?
          </ForgotPassButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            Войти
          </AuthButton>
          <NavigateBlock>
            <NavigateTitle>У вас нет акаунта?</NavigateTitle>
            <NavigareButton onClick={() => navigator('/register')}>
              Регистрация
            </NavigareButton>
          </NavigateBlock>
        </FormContainer>
      </AuthPageLayout>
    </>
  )
}

export default LoginPage
