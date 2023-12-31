import 'package:arogya/models/auth/user_auth.dart';

abstract class IAuthRepository {
  Future<bool> register(UserRegisterModel userRegisterModel);
  Future<String> login(UserLoginModel userLoginModel);
}
