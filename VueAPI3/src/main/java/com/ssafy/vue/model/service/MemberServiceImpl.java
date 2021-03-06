package com.ssafy.vue.model.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.model.MemberDto;
import com.ssafy.vue.model.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {
		if(memberDto.getUserid() == null || memberDto.getUserpwd() == null)
			return null;
		return sqlSession.getMapper(MemberMapper.class).login(memberDto);
	}

	@Override
	public MemberDto userInfo(String userid) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).userInfo(userid);
	}

	@Override
	@Transactional
	public boolean registerMember(MemberDto memberDto) throws Exception {
		if(memberDto.getUserid() == null || memberDto.getUsername() == null
				|| memberDto.getEmail() == null || memberDto.getUserpwd() == null) {
			throw new Exception();
		}
		return sqlSession.getMapper(MemberMapper.class).registerMember(memberDto) == 1;
	}
	
	@Override
	public List<MemberDto> listMember() throws Exception {
		return sqlSession.getMapper(MemberMapper.class).listMember();
	}

	@Override
	public void updateMember(MemberDto memberDto) throws Exception {
		sqlSession.getMapper(MemberMapper.class).updateMember(memberDto);
	}

	@Override
	public boolean deleteMember(String userid) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).deleteMember(userid) == 1;
	}

	@Override
	public MemberDto findpwd(Map<String, String> map) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).findPassword(map);
	}

	@Override
	public int idCheck(String checkId) throws Exception {
		return sqlSession.getMapper(MemberMapper.class).idCheck(checkId); // 0 or 1
	}

	@Override
	public boolean modifyMember(MemberDto memberDto) {
		// TODO Auto-generated method stub
		return sqlSession.getMapper(MemberMapper.class).modifyMember(memberDto) == 1;
	}
	
}
