import 'package:arogya/api/api_service.dart';
import 'package:arogya/models/auth/user_auth.dart';
import 'package:arogya/repositories/auth/auth_interface.dart';

class AuthRepository extends IAuthRepository {
  final ApiService _apiService;

  AuthRepository(this._apiService);

  @override
  Future<String> login(UserLoginModel userLoginModel) {
    throw UnimplementedError();
  }

  @override
  Future<bool> register(UserRegisterModel userRegisterModel) {
    throw UnimplementedError();
  }
}
