package com.ssafy.vue.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.vue.model.MemberDto;

public interface MemberService {

	public MemberDto login(MemberDto memberDto) throws Exception;
	public MemberDto userInfo(String userid) throws Exception;
	boolean registerMember(MemberDto memberDto) throws Exception;
	
	List<MemberDto> listMember() throws Exception;
	void updateMember(MemberDto memberDto) throws Exception;
	boolean deleteMember(String userid) throws Exception;

	MemberDto findpwd(Map<String, String> map) throws Exception;
	public int idCheck(String checkId) throws Exception;
	
}
